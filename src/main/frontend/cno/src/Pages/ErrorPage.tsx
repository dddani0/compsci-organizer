export default function ErrorPage({ error }: { error: any }) {
    return (
        <div>
            <h1>{error.message}</h1>
        </div>
    )
}