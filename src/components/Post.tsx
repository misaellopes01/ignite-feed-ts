import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author {
    name: string
    role: string
    avatarUrl: string
}

export interface Content {
    type: 'paragraph' | 'link' | string
    text: string
}

export interface PostProps {
    author: Author
    publishedAt: Date
    content: Content[]
}

export function Post({ author, publishedAt, content }: PostProps) {

    const [comments, setComments] = useState(['Niceeee, lets go to the next level'])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d' de 'LLLL' as 'HH:mm'h'", { locale: ptBR })

    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Campo Obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}

                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedAtRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => line.type === 'paragraph' ?
                    <p key={line.text}>{line.text}</p> :
                    <p key={line.text}><a href="#">{line.text}</a></p>
                )}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (<Comment
                    onDeleteComment={deleteComment}
                    key={comment}
                    content={comment}
                />))}
            </div>

        </article >
    )
}