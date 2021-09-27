/* eslint-disable camelcase */
export interface Product {
    id: number
    uuid: string
    shop_id: string
    slug: string
    name: string
    price: string
    act_price: string
    rate: string
    weight: string
    instagram_link: string
    description: string
    media: string
    count_visit: string
    is_digital: string
    is_private: string
    private_key: string
    additional_field: string
    deleted_at: any
    created_at: string
    updated_at: string
}

export interface LastOrderSell {
    id: number
    uuid: string
    shop_id: string
    shop_address_id: string
    invoice: string
    email: string
    tracking_number: any
    weight_total: string
    subtotal: string
    act_subtotal: string
    shipping_total: string
    grand_total: string
    customer_fee: string
    customer_is_fee: string
    is_digital: string
    act_grand_total: string
    status: string
    expired_at: string
    payment_url?: string
    pg_token?: string
    deleted_at: any
    created_at: string
    updated_at: string
}

export interface LastProductSell {
    id: number
    uuid: string
    order_id: string
    product_id: string
    qty: string
    total_weight: string
    total_price: string
    total_act_price: string
    deleted_at: any
    created_at: string
    updated_at: string
    product: Product
}

export interface DashboardResponse {
    count_order_yearly: number[]
    sum_order_yearly: number[]
    count_product_sell_yearly: number[]
    last_product_sell: LastProductSell[]
    last_order_sell: LastOrderSell[]
    count_order: string
    total_order: string
    balance: string
}
