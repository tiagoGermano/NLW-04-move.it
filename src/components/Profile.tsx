import styles from '../styles/components/Profile.module.css';

export function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/tiagogermano.png" alt="Tiago Germano Profile" />
			<div>
				<strong>Tiago Germano</strong>
				<p>
					<img src="icons/level.svg" alt="Legal"/>
					Level 1
				</p>
			</div>
		</div>
	)   
}