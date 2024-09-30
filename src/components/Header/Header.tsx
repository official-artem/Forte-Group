import { Box, HStack } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/redux";
import { MdFavoriteBorder } from "react-icons/md";
import styles from './Header.module.scss';

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
					<MdFavoriteBorder cursor={'pointer'} size={25} data-length={1} />
				</Box>
			</HStack>
		</Box>
	);
}