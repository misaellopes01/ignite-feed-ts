import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { DeleteComment } from './DeleteComment'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)
    const [click, setClick] = useState(false)

    function handleConfirmDeleteComment() {
        !click ? setClick(true) : setClick(false)
    }


    function handleLikeComment() {
        setLikeCount((state) => state + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/misaellopes01.png" alt='' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Misael Lopes</strong>
                            <time
                                title='02 de Agosto as 08:00h'
                                dateTime="2022-08-02 08:00:25"
                            >
                                Cerca ha 1h atrás
                            </time>

                        </div>
                        <button
                            onClick={handleConfirmDeleteComment}
                            title='Deletar comentário'
                        >
                            <Trash size={24} />
                            {click && <DeleteComment onDeleteComment={onDeleteComment} content={content} />}
                        </button>

                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}