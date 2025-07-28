import ReactMarkdown from 'react-markdown'

export default function Recipe({markdownText}) {
    return (
        <section>
            <h2>Claude IA Recomendations</h2>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </section>
    )
}