import { Box, HStack, Menu, MenuButton } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/redux";
import { MdFavoriteBorder } from "react-icons/md";
import styles from './Header.module.scss';
import FavoritesList from '../FavoritesList/FavoritesList';

export const Header = () => {
	const favorites = useAppSelector(state => state.favorites);

	console.log(favorites)

	return (
		<Box 
			bg={'gray.100'} 
			borderRadius={"0 0 30px 30px"} 
			display={'flex'} 
			justifyContent={'flex-end'} 
			px={8}
			py={4}
		>
			<HStack position={'relative'}>
					<Box data-count={favorites.length} className={styles.favoritesCount}>
					<Menu>
						<MenuButton>
							<MdFavoriteBorder cursor={'pointer'} size={25} data-length={1} />
						</MenuButton>
						
					<FavoritesList />
					</Menu>
				</Box>
			</HStack>
		</Box>
	);
}