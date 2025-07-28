import ReactMarkdown from 'react-markdown'

export default function Recipe({markdownText}) {
    return (
        <section className='app-main-recipe'>
            <h2>Claude IA Recomendations:</h2>
            <hr />
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </section>
    )
}