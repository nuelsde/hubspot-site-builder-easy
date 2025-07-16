# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3b9be350-f6a8-47f6-a06d-fe661ec1ad1c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3b9be350-f6a8-47f6-a06d-fe661ec1ad1c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd hubspot-site-builder-easy

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Running tests

Run unit tests using Vitest. Run `npm install` once to install dependencies before executing the tests:

```sh
npm install
npm test
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3b9be350-f6a8-47f6-a06d-fe661ec1ad1c) and click on Share -> Publish.

## Installing the HubSpot theme

Follow these steps to install the theme in your HubSpot account.

1. Navigate to the `src/templates` directory of this repository.
2. Compress all files inside this folder into a ZIP archive **without including the `src/templates` folder itself**.
3. In HubSpot, open **Marketing > Files and Templates > Design Tools**.
4. Click **File > Upload** and select the ZIP archive. HubSpot will extract the files into your account.
5. After the upload finishes, create a new page and choose `ki-transformation.html` or `landing-page.html` from the uploaded theme.

### Using the HubSpot CLI (optional)

You can also upload the templates using the HubSpot CLI. Configure your `hubspot.config.yml` and run:

```sh
hs upload src/templates <destination-path-in-hubspot>
```

This command uploads the templates directly to the specified folder in your HubSpot account.

A sample `hubspot.config.yml` is included at the project root:

```yaml
defaultPortal: default
portals:
  - name: default
    portalId: YOUR-PORTAL-ID
    authType: personalaccesskey
    personalAccessKey: YOUR-PERSONAL-ACCESS-KEY
```

Edit `portalId` and `personalAccessKey` with your HubSpot credentials and adjust `defaultPortal` if you use a different portal name.

## Module `meta.json` configuration

All modules under `src/new-hubspot-template/modules/` use the `content_types` property to declare where a module can be used. Per HubSpot's documentation, valid options include `SITE_PAGE`, `LANDING_PAGE`, and other content types. For example:

```json
"content_types": ["SITE_PAGE", "LANDING_PAGE"]
```

This supersedes the older `host_template_types` field.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
