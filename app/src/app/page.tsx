"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-primary p-8">
            <h1 className="text-display-sm font-semibold text-primary">
                Untitled UI — Starter
            </h1>
            <p className="text-md text-tertiary">
                Projeto configurado com Untitled UI Pro.
            </p>
            <Button href="/checkout" size="lg" color="primary" iconTrailing={ArrowRight}>
                Ir para o Checkout
            </Button>
        </main>
    );
}
