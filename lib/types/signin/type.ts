/* eslint-disable camelcase */

export interface Shop {
        id: number;
        uuid: string;
        slug: string;
        shop_name: string;
        email: string;
        phone: string;
        description: string;
        balance: string;
        avatar: string;
        cover: string;
        count_visit: string;
        deleted_at?: any;
        created_at: Date;
        updated_at: Date;
    }

export interface SigninResponse {
        message: string;
        token: string;
        shop: Shop;
    }
