# Transactly

![Transactly Banner](https://res.cloudinary.com/dikzx4eyh/image/upload/v1725010141/programming/transactlyimg_1_ukojn2.png)

Transactly is a comprehensive financial banking application that connects all your banking accounts in one place, enabling you to seamlessly manage and track all your transactions. Built with modern web technologies, Transactly provides a secure, user-friendly, and responsive interface for monitoring your financial activities.

## Features

- **Unified Banking Accounts**: Connect and manage multiple banking accounts from different financial institutions in one centralized platform.
- **Transaction Management**: View, categorize, and track all your transactions with detailed insights.
- **Real-Time Data**: Get up-to-date information on your accounts and transactions with real-time data synchronization.
- **Visual Analytics**: Analyze your financial data through interactive charts and graphs.
- **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.
- **Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.
- **Secure Environment**: Data security is our top priority, ensuring all your financial information is protected.
- **Error Monitoring**: Continuous monitoring and error tracking to ensure a smooth user experience.

## Tech Stack

- **Next.js**: A React framework for server-rendered and static web applications.
- **Appwrite**: A secure backend server for Web, Mobile, and Flutter developers that provides a set of integrated APIs.
- **Plaid**: A financial services tool that enables seamless access to banking accounts.
- **Dwolla**: A payment services provider that facilitates bank transfers.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **TailwindCSS**: A utility-first CSS framework for creating responsive designs.
- **Chart.js**: A JavaScript library for creating interactive and visually appealing charts.
- **ShadCN**: A customizable UI component library for building modern web applications.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kv4biz/transactly.git
    cd transactly
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a new file named `.env` in the root of your project and add the following content:

    ```bash
    #NEXT
    NEXT_PUBLIC_SITE_URL=

    #APPWRITE
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_APPWRITE_PROJECT=
    APPWRITE_DATABASE_ID=
    APPWRITE_USER_COLLECTION_ID=
    APPWRITE_BANK_COLLECTION_ID=
    APPWRITE_TRANSACTION_COLLECTION_ID=
    APPWRITE_SECRET=

    #PLAID
    PLAID_CLIENT_ID=
    PLAID_SECRET=
    PLAID_ENV=
    PLAID_PRODUCTS=
    PLAID_COUNTRY_CODES=

    #DWOLLA
    DWOLLA_KEY=
    DWOLLA_SECRET=
    DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
    DWOLLA_ENV=sandbox
    ```

    Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/), [Plaid](https://plaid.com/), and [Dwolla](https://www.dwolla.com/) platforms.

4. Run the development server:
    ```bash
    npm run dev
    ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

## Usage

- **Connecting Accounts**: Users can securely link their banking accounts through the Plaid integration.
- **Transaction Monitoring**: After connecting accounts, users can view and manage their transactions within the app.
- **Data Visualization**: Financial data is presented through dynamic and interactive charts powered by Chart.js.
- **Funds Transfer**: Transfer funds between accounts using Dwolla, with all required fields and recipient bank ID.
- **Error Reporting**: Any errors encountered by users are automatically logged and reported to Sentry for immediate resolution.

## Contributing

We welcome contributions to improve Transactly! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please reach out to [kv4biz@gmail.com](mailto:kv4biz@gmail.com ).
