import { useDispatch, useSelector } from 'react-redux';
import { setCategories, useGetCategoriesQuery } from 'redux/index';
import { selectCategories } from 'redux/selectors';

const SaveCategoriesHook = () => {
  const dispatch = useDispatch();
  const { data } = useGetCategoriesQuery();
  const categories = useSelector(selectCategories);

  if (categories?.income?.length && categories?.expense?.length && data) {
    return;
  } else {
    if (!data) return;
    else dispatch(setCategories(data));
  }
};

export default SaveCategoriesHook;
