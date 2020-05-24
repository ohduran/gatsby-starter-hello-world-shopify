<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby + Shopify" src="static/shopify+gatsby.png" height="60px" />
  </a>
</p>

# Gatsby Starter Hello World Shopify

[![Netlify Status](https://api.netlify.com/api/v1/badges/0f88d9fa-e02a-4f25-a0c3-432acc47203b/deploy-status)](https://app.netlify.com/sites/gatsby-starter-hello-world-shopify/deploys)

This Gatsby starter is the skeleton you need to create your own headless Shopify store experience using Gatsby.

#### [Try DEMO](https://hello-world-shopify.alvaroduran.com/)

## 🚀 Quick start

#### Set up your Shopify account

1.  Create a [new Shopify account](https://www.shopify.com/) and store if you don’t have one.

2.  Create a private app in your store by navigating to Apps, then Manage private apps.

3.  Create a new private app, with any “Private app name” and leaving the default permissions as Read access under Admin API.

4.  Enable the [Shopify Storefront API](https://shopify.dev/docs/storefront-api) by checking the box that says “Allow this app to access your storefront data using Storefront API”. Make sure to also grant access to _read product_ and _customer tags_ by checking their corresponding boxes.

#### Create a Gatsby site

Use the Gatsby CLI to create a new site, specifying this starter.

```shell
# create a new Gatsby site using the hello-world-tailwind-css starter
gatsby new my-new-store https://github.com/ohduran/gatsby-starter-hello-world-shopify
```

#### Configure your Gatsby site to talk to your Shopify store

Check out the **env.example** file. Rename it as **.env** and introduce your shopify credentials (don't worry, this file will be ignored by git):

1. **SHOP_NAME**: The domain name of your Shopify shop.

Example: 'gatsby-source-shopify-test-shop' if your Shopify address is 'gatsby-source-shopify-test-shop.myshopify.com'.

If you are running your shop on a custom domain, you need to use the whole domain as the shop name, without a trailing slash, for example: 'gatsby-shop.com'.

2. **SHOP_TOKEN**: An API access token to your Shopify shop.

You can generate an access token in the "Manage private apps" section of your shop's Apps settings. In the Storefront API section, be sure to select "Allow this app to access your storefront data using the Storefront API". More info [here](https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication).

#### Add some products to your Shopify store

Now is the time to add some Products on your Shopify admin panel with pictures and variants - size, color, etc.

#### Start developing

Navigate into your new site’s directory and start it up.

```shell
cd my-new-store/
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Notice that each product is listed on the index page, and you can access to its detail page with info about variants and prices. The **Add to Cart** functionality is already set up, as well as the **Go to Checkout** section on the cart page.

Not convinced? See it for yourself on the [demo](https://hello-world-shopify.alvaroduran.com/).

## 🎓 Learn more

Looking for more guidance? A quick tutorial on how to use Shopify with Gatsby lives [on the Gatsby website](https://www.gatsbyjs.org/docs/building-an-ecommerce-site-with-shopify/).
