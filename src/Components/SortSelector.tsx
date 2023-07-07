import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: '相关性' },
    { value: '-added', label: '上架日期' },
    { value: '-name', label: '游戏名' },
    { value: '-released', label: '发布日期' },
    { value: '-metacritic', label: '人气' },
    { value: '-rating', label: '平均评级' },
  ];
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentOrder = sortOrders.find((order) => order.value === sortOrder);

  const onSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        排序 : {currentOrder?.label || '相关性'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
