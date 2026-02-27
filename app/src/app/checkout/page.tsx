"use client";

import { useState } from "react";
import {
    CreditCard01,
    Lock01,
    Mail01,
    MarkerPin01,
    Phone,
    ShieldTick,
    User01,
} from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Input } from "@/components/base/input/input";
import { PaymentInput } from "@/components/base/input/input-payment";
import { RadioButton, RadioGroup } from "@/components/base/radio-buttons/radio-buttons";
import { Select } from "@/components/base/select/select";
import type { SelectItemType } from "@/components/base/select/select";
import {
    AmexIcon,
    ApplePayIcon,
    MastercardIcon,
    PayPalIcon,
    VisaIcon,
} from "@/components/foundations/payment-icons";

const countries: SelectItemType[] = [
    { id: "br", label: "Brasil" },
    { id: "us", label: "Estados Unidos" },
    { id: "pt", label: "Portugal" },
    { id: "ar", label: "Argentina" },
    { id: "cl", label: "Chile" },
    { id: "mx", label: "México" },
];

const states: SelectItemType[] = [
    { id: "sp", label: "São Paulo" },
    { id: "rj", label: "Rio de Janeiro" },
    { id: "mg", label: "Minas Gerais" },
    { id: "ba", label: "Bahia" },
    { id: "rs", label: "Rio Grande do Sul" },
    { id: "pr", label: "Paraná" },
    { id: "pe", label: "Pernambuco" },
    { id: "ce", label: "Ceará" },
];

interface OrderItem {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

const orderItems: OrderItem[] = [
    {
        name: "Plano Pro",
        description: "Assinatura mensal",
        price: 99.0,
        quantity: 1,
    },
    {
        name: "Domínio personalizado",
        description: "Addon — .com.br",
        price: 29.0,
        quantity: 1,
    },
];

const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const discount = 12.8;
const total = subtotal - discount;

function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    }

    return (
        <div className="min-h-screen bg-secondary px-4 py-8 sm:py-12">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-display-sm font-semibold text-primary">
                        Checkout
                    </h1>
                    <p className="mt-2 text-md text-tertiary">
                        Complete as informações abaixo para finalizar sua compra.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-8 lg:flex-row">
                        {/* Left column — Form */}
                        <div className="flex-1 space-y-8">
                            {/* Contact Information */}
                            <section className="rounded-xl bg-primary p-6 shadow-xs ring-1 ring-primary ring-inset">
                                <h2 className="mb-5 text-lg font-semibold text-primary">
                                    Informações de contato
                                </h2>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <Input
                                            label="Nome"
                                            placeholder="João"
                                            icon={User01}
                                            isRequired
                                        />
                                        <Input
                                            label="Sobrenome"
                                            placeholder="Silva"
                                            isRequired
                                        />
                                    </div>
                                    <Input
                                        label="E-mail"
                                        placeholder="joao@email.com"
                                        type="email"
                                        icon={Mail01}
                                        isRequired
                                    />
                                    <Input
                                        label="Telefone"
                                        placeholder="(11) 99999-0000"
                                        type="tel"
                                        icon={Phone}
                                    />
                                </div>
                            </section>

                            {/* Shipping Address */}
                            <section className="rounded-xl bg-primary p-6 shadow-xs ring-1 ring-primary ring-inset">
                                <h2 className="mb-5 text-lg font-semibold text-primary">
                                    Endereço de cobrança
                                </h2>
                                <div className="space-y-4">
                                    <Select
                                        label="País"
                                        placeholder="Selecione o país"
                                        items={countries}
                                        defaultSelectedKey="br"
                                    >
                                        {(item) => (
                                            <Select.Item
                                                key={item.id}
                                                id={item.id}
                                                label={item.label}
                                            />
                                        )}
                                    </Select>

                                    <Input
                                        label="Endereço"
                                        placeholder="Rua, número, complemento"
                                        icon={MarkerPin01}
                                        isRequired
                                    />

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        <Input
                                            label="Cidade"
                                            placeholder="São Paulo"
                                            isRequired
                                        />
                                        <Select
                                            label="Estado"
                                            placeholder="UF"
                                            items={states}
                                        >
                                            {(item) => (
                                                <Select.Item
                                                    key={item.id}
                                                    id={item.id}
                                                    label={item.label}
                                                />
                                            )}
                                        </Select>
                                        <Input
                                            label="CEP"
                                            placeholder="00000-000"
                                            isRequired
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Payment */}
                            <section className="rounded-xl bg-primary p-6 shadow-xs ring-1 ring-primary ring-inset">
                                <div className="mb-5 flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-primary">
                                        Pagamento
                                    </h2>
                                    <div className="flex items-center gap-1.5">
                                        <VisaIcon className="h-6 w-auto" />
                                        <MastercardIcon className="h-6 w-auto" />
                                        <AmexIcon className="h-6 w-auto" />
                                    </div>
                                </div>

                                <RadioGroup
                                    value={paymentMethod}
                                    onChange={setPaymentMethod}
                                    aria-label="Método de pagamento"
                                    className="mb-5 gap-3"
                                >
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        <label
                                            className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 ring-1 ring-inset transition ${
                                                paymentMethod === "card"
                                                    ? "bg-brand-primary_alt ring-brand"
                                                    : "ring-primary hover:bg-primary_hover"
                                            }`}
                                        >
                                            <RadioButton
                                                value="card"
                                                aria-label="Cartão de crédito"
                                            />
                                            <div className="flex items-center gap-2">
                                                <CreditCard01 className="size-5 text-fg-quaternary" />
                                                <span className="text-sm font-medium text-secondary">
                                                    Cartão
                                                </span>
                                            </div>
                                        </label>

                                        <label
                                            className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 ring-1 ring-inset transition ${
                                                paymentMethod === "paypal"
                                                    ? "bg-brand-primary_alt ring-brand"
                                                    : "ring-primary hover:bg-primary_hover"
                                            }`}
                                        >
                                            <RadioButton
                                                value="paypal"
                                                aria-label="PayPal"
                                            />
                                            <div className="flex items-center gap-2">
                                                <PayPalIcon className="h-5 w-auto" />
                                                <span className="text-sm font-medium text-secondary">
                                                    PayPal
                                                </span>
                                            </div>
                                        </label>

                                        <label
                                            className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 ring-1 ring-inset transition ${
                                                paymentMethod === "apple"
                                                    ? "bg-brand-primary_alt ring-brand"
                                                    : "ring-primary hover:bg-primary_hover"
                                            }`}
                                        >
                                            <RadioButton
                                                value="apple"
                                                aria-label="Apple Pay"
                                            />
                                            <div className="flex items-center gap-2">
                                                <ApplePayIcon className="h-5 w-auto" />
                                                <span className="text-sm font-medium text-secondary">
                                                    Apple Pay
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                </RadioGroup>

                                {paymentMethod === "card" && (
                                    <div className="space-y-4">
                                        <Input
                                            label="Nome no cartão"
                                            placeholder="João M. Silva"
                                            isRequired
                                        />
                                        <PaymentInput
                                            label="Número do cartão"
                                            placeholder="1234 1234 1234 1234"
                                            isRequired
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                label="Validade"
                                                placeholder="MM / AA"
                                                isRequired
                                            />
                                            <Input
                                                label="CVV"
                                                placeholder="•••"
                                                icon={Lock01}
                                                isRequired
                                                tooltip="Os 3 dígitos no verso do cartão"
                                            />
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === "paypal" && (
                                    <div className="rounded-lg bg-secondary p-6 text-center">
                                        <PayPalIcon className="mx-auto mb-3 h-8 w-auto" />
                                        <p className="text-sm text-tertiary">
                                            Você será redirecionado ao PayPal para completar o pagamento.
                                        </p>
                                    </div>
                                )}

                                {paymentMethod === "apple" && (
                                    <div className="rounded-lg bg-secondary p-6 text-center">
                                        <ApplePayIcon className="mx-auto mb-3 h-8 w-auto" />
                                        <p className="text-sm text-tertiary">
                                            Confirme o pagamento com Apple Pay no seu dispositivo.
                                        </p>
                                    </div>
                                )}
                            </section>
                        </div>

                        {/* Right column — Order Summary */}
                        <div className="w-full lg:w-96">
                            <div className="sticky top-8 space-y-6">
                                <section className="rounded-xl bg-primary p-6 shadow-xs ring-1 ring-primary ring-inset">
                                    <h2 className="mb-5 text-lg font-semibold text-primary">
                                        Resumo do pedido
                                    </h2>

                                    <div className="space-y-4">
                                        {orderItems.map((item) => (
                                            <div
                                                key={item.name}
                                                className="flex items-start justify-between"
                                            >
                                                <div>
                                                    <p className="text-sm font-medium text-secondary">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-sm text-tertiary">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <p className="text-sm font-medium text-secondary">
                                                    {formatCurrency(item.price)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="my-5 h-px bg-secondary" />

                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-tertiary">Subtotal</span>
                                            <span className="text-sm text-secondary">
                                                {formatCurrency(subtotal)}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-tertiary">
                                                    Desconto
                                                </span>
                                                <Badge size="sm" color="success">
                                                    -10%
                                                </Badge>
                                            </div>
                                            <span className="text-sm text-success-primary">
                                                -{formatCurrency(discount)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="my-5 h-px bg-secondary" />

                                    <div className="flex justify-between">
                                        <span className="text-md font-semibold text-primary">
                                            Total
                                        </span>
                                        <span className="text-md font-semibold text-primary">
                                            {formatCurrency(total)}
                                        </span>
                                    </div>
                                </section>

                                {/* Terms & Submit */}
                                <div className="space-y-4">
                                    <Checkbox
                                        label="Concordo com os termos de uso e política de privacidade"
                                        isRequired
                                    />

                                    <Button
                                        type="submit"
                                        size="xl"
                                        color="primary"
                                        className="w-full"
                                        isLoading={isLoading}
                                        iconLeading={Lock01}
                                    >
                                        Pagar {formatCurrency(total)}
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 text-sm text-tertiary">
                                        <ShieldTick className="size-4" />
                                        <span>Pagamento seguro e criptografado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
