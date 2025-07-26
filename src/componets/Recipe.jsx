import ReactMarkdown from 'react-markdown'

export default function Recipe({markdownText}) {
    return (
        <section>
            <h2>Recomendation of IA</h2>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </section>
    )
}