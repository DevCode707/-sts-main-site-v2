import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type RevalidatePayload = {
  full_slug?: string;
};

function isRevalidatePayload(value: unknown): value is RevalidatePayload {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const fullSlug = (value as RevalidatePayload).full_slug;

  return fullSlug === undefined || typeof fullSlug === "string";
}

async function parseRevalidatePayload(
  request: NextRequest,
): Promise<RevalidatePayload> {
  try {
    const body: unknown = await request.json();

    if (isRevalidatePayload(body)) {
      return body;
    }
  } catch {
    // Webhook may send an empty body.
  }

  return {};
}

export function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/revalidate",
    now: Date.now(),
  });
}

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env["STORYBLOK_REVALIDATE_SECRET"]) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const payload = await parseRevalidatePayload(request);

  revalidateTag("storyblok", "max");

  const fullSlug = payload.full_slug?.trim();

  if (fullSlug === "home") {
    revalidatePath("/");
  }

  if (fullSlug !== undefined && fullSlug.length > 0 && fullSlug !== "home") {
    revalidatePath(`/${fullSlug}`);
  }

  return NextResponse.json({
    revalidated: true,
    fullSlug: fullSlug ?? null,
    now: Date.now(),
  });
}
