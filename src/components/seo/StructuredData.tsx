// Structured Data (JSON-LD) Component for embedding schemas
// This component should be used in pages to add structured data for SEO

interface StructuredDataProps {
    data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
