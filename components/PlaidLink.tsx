"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
import Image from "next/image";
import { Landmark } from "lucide-react";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });

      router.push("/home");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary gap-2"
        >
          <Landmark />
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          onClick={() => open()}
          variant="ghost"
          className="plaidlink-ghost"
        >
          <div className="relative size-6">
            <Image
              src="/icons/connect-bank.svg"
              alt="connect bank"
              width={32}
              height={32}
            />
          </div>
          <p className="text-[14px] font-semibold text-black-2 block md:hidden lg:hidden xl:block">
            Connect Bank
          </p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <div className="relative size-6">
            <Image
              src="/icons/connect-bank.svg"
              alt="connect bank"
              width={32}
              height={32}
            />
          </div>
          <p className="text-[14px] font-semibold text-black-2 block md:hidden lg:hidden xl:block">
            Connect Bank
          </p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
