# Hello

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

Everything else has been a product of my brain.

## API Reference Integration

This project demonstrates integrating a standalone API reference into a Docusaurus documentation site.

Docusaurus is a React-based single-page application (SPA), which intercepts internal navigation links and performs client-side routing. However, most API reference tools (including Scalar, Swagger UI, and Redoc) rely on a full page load to initialize correctly.

### Approach

The API reference is built using Scalar and served as a static site from Docusaurus’ static/api-reference/ directory.

The OpenAPI specification is loaded directly by Scalar at runtime.

Instead of embedding the API reference inside the React app, it is accessed as a standalone page under the same domain.

### Key Challenge & Solution

Problem: Clicking the API Reference link in the Docusaurus navbar caused a blank or broken page due to SPA routing.

Solution: The navbar link was implemented as a plain HTML <a href> element, bypassing the React router and forcing a full page reload.

This approach avoids plugin conflicts, improves stability, and mirrors how API references are commonly deployed in production documentation systems.
