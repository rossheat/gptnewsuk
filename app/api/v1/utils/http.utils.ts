import { NextResponse } from "next/server";

export const headers = {
  "Access-Control-Allow-Origin": "https://chat.openai.com",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id",
};

export const handleOptionsRequest = () =>
  NextResponse.json({}, { status: 200, headers });

export const makeResponse = (data: any, status: number) => {
  return NextResponse.json(data, { status, headers });
};
