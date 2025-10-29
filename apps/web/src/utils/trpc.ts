import { createTRPCContext } from "@trpc/tanstack-react-query";
import type { AppRouter } from "@todo-app/api/routers/index";

export const { TRPCProvider, useTRPC, useTRPCClient } =
	createTRPCContext<AppRouter>();
