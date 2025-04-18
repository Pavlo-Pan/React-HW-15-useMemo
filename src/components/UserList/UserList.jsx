
import styles from './UserList.module.css'

const UserList = ( { users = [] } ) => {
    const userItem = users.map(user => (
        <li key={user.id} className={styles.userItem}>{user.name}</li>
    ))

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Пользователи ({users.length})</h2>
            {users.length > 0 ? (
                <ul className={styles.userList}>
                    {userItem}
                </ul>) : (
                <p className={styles.noUsers}>Пользователи не найдены</p>
            )
            }
        </div>
    )
}
export default UserList;