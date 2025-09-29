import { query } from "@/lib/db";
import { NextResponse } from "next/server";
import type { AclUser } from "@/types/db";

export async function GET() {
  try {
    const rows = await query({
      query: "SELECT * FROM acl_users",
      values: [],
    });

    return NextResponse.json(rows as AclUser[], { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
