import type { DashboardUserInfoProps } from '~/types/Dashboard';
import { DashboardUserItem } from './DashboardUserItem';
export const DashboardUserInfo = ({
  buyer_rating,
  buyer_num_ratings,
  num_collection,
  num_wantlist,
  num_for_sale
}: DashboardUserInfoProps) => {
  return (
    <ul className='px-10'>
      <DashboardUserItem>
        <strong>Buyer Rating:</strong> {buyer_rating}/100 from{' '}
        {buyer_num_ratings} feedback{' '}
      </DashboardUserItem>
      <DashboardUserItem>
        <strong>Collection Size:</strong> {num_collection}
      </DashboardUserItem>
      <DashboardUserItem>
        <strong>Want List Size:</strong> {num_wantlist}
      </DashboardUserItem>
      <DashboardUserItem>
        <strong>Items for Sale:</strong> {num_for_sale}
      </DashboardUserItem>
    </ul>
  );
};
