import { useState, useCallback, useMemo } from 'react';
import initialUsers from '../data/initialUsers';
import UserList from '../UserList/UserList';
import styles from './FilterUsers.module.css'

const FilterUsers = () => {

    const [filter, setFilter] = useState('')
    const [userList] = useState(initialUsers)

    const filterUsers = useCallback((users, filterText) => {
        if (!filterText.trim()) return users;

        const lowerCaseFilter = filterText.toLowerCase();
        return users.filter(user => user.name.toLowerCase().includes(lowerCaseFilter));
    }, []);

    const filteredUsers = useMemo(() => {
        return filterUsers(userList, filter);
    }, [filter, filterUsers, userList]);
    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Список пользователей c фильтрацией</h1>
            <div className={styles.filteBlock}>
                <label htmlFor="filter" className={styles.filteLabel}>
                    Фильтр пользователей:
                </label>
                <input
                    id="filter"
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Введите для фильтрации..."
                    className={styles.filterInput}
                />
            </div>

            <UserList users={filteredUsers} />
        </div>
    )
}
export default FilterUsers;