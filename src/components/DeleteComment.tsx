import styles from './DeleteComment.module.css'

interface DeleteCommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function DeleteComment({ onDeleteComment, content }: DeleteCommentProps) {

    function handleDeleteConfirmedComment() {
        onDeleteComment(content)
    }

    return (
        <>
            <div className={styles.fitScreen}>
            </div>
            <div className={styles.card}>
                <div className={styles.cardMain}>
                    <strong>Excluir comentário</strong>
                    <p>Você tem certeza que gostaria de excluir este comentário?</p>
                    <footer>
                        <a>Cancelar</a>
                        <a onClick={handleDeleteConfirmedComment}>Sim, excluir</a>
                    </footer>
                </div>
            </div>
        </>
    )
}