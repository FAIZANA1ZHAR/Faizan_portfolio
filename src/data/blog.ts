export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "azure-openai-integration",
    title: "Integrating Azure OpenAI with Next.js Applications",
    excerpt: "Learn how to seamlessly integrate Azure OpenAI services into your Next.js applications for powerful AI-driven features.",
    content: `# Integrating Azure OpenAI with Next.js Applications

In this comprehensive guide, we'll explore how to integrate Azure OpenAI services into your Next.js applications to create powerful AI-driven features.

## Prerequisites

Before we begin, make sure you have:
- An Azure subscription
- An Azure OpenAI resource
- A Next.js application
- Basic knowledge of TypeScript

## Setting Up Azure OpenAI

First, create an Azure OpenAI resource in your Azure portal and deploy a model.

\`\`\`typescript
import { OpenAIApi, Configuration } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  basePath: process.env.AZURE_OPENAI_ENDPOINT,
  baseOptions: {
    headers: {
      'api-key': process.env.AZURE_OPENAI_API_KEY,
    },
  },
});

const openai = new OpenAIApi(configuration);
\`\`\`

## Implementation

Create an API route to handle OpenAI requests:

\`\`\`typescript
export async function POST(request: Request) {
  const { messages } = await request.json();
  
  const response = await openai.createChatCompletion({
    model: 'gpt-35-turbo',
    messages,
    max_tokens: 150,
  });
  
  return Response.json(response.data);
}
\`\`\`

This integration allows you to build sophisticated AI features while maintaining security and scalability.`,
    date: "2024-01-15",
    category: "Azure",
    readTime: "8 min read"
  },
  {
    slug: "power-platform-automation",
    title: "Streamlining Business Processes with Power Platform",
    excerpt: "Discover how to automate complex business workflows using Microsoft Power Platform's suite of tools.",
    content: `# Streamlining Business Processes with Power Platform

Microsoft Power Platform offers a comprehensive suite of tools for automating business processes and creating custom applications without extensive coding.

## Power Platform Components

The platform consists of four main components:
- **Power Apps**: For creating custom applications
- **Power Automate**: For workflow automation
- **Power BI**: For business analytics
- **Power Virtual Agents**: For chatbot creation

## Creating Your First Power App

Start by connecting to your data source:

\`\`\`
1. Open Power Apps Studio
2. Choose your data connector (SharePoint, SQL, etc.)
3. Design your app interface
4. Add business logic with formulas
5. Test and publish
\`\`\`

## Power Automate Workflows

Automate repetitive tasks with flows:

\`\`\`json
{
  "trigger": "When an item is created",
  "actions": [
    "Send approval email",
    "Update SharePoint list",
    "Notify teams channel"
  ]
}
\`\`\`

The Power Platform empowers business users to create solutions that previously required developer intervention.`,
    date: "2024-01-10",
    category: "Power Platform",
    readTime: "6 min read"
  },
  {
    slug: "dotnet-microservices",
    title: "Building Scalable Microservices with .NET 8",
    excerpt: "Explore modern microservices architecture patterns using .NET 8 and containerization technologies.",
    content: `# Building Scalable Microservices with .NET 8

Microservices architecture has become the standard for building scalable, maintainable applications. With .NET 8, Microsoft has introduced powerful features that make microservices development more streamlined.

## Key Benefits of Microservices

- **Scalability**: Scale individual services based on demand
- **Technology Diversity**: Use different technologies for different services
- **Fault Isolation**: Failures in one service don't affect others
- **Team Autonomy**: Different teams can work on different services

## Setting Up a Microservice

Create a minimal API with .NET 8:

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.MapGet("/api/products", () => 
{
    return Results.Ok(new { Products = "Sample Data" });
});

app.Run();
\`\`\`

## Docker Configuration

Create a Dockerfile for containerization:

\`\`\`dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["ProductService.csproj", "."]
RUN dotnet restore
COPY . .
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProductService.dll"]
\`\`\`

This approach provides a solid foundation for building enterprise-grade microservices.`,
    date: "2024-01-05",
    category: "Development",
    readTime: "10 min read"
  }
];
