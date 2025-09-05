import { Avatar } from '~/components/Avatar/Avatar';
import { DiscogsValues } from '../DiscogsValues/DiscogsValues';
import type { DashboardHeaderProps } from '~/types/Dashboard';
import { DashboardUserInfo } from '../DashboardUserInfo/DashboardUserInfo';
export const DashboardHeader = ({
  avatar_url,
  username,
  buyer_rating,
  buyer_num_ratings,
  num_collection,
  num_wantlist,
  num_for_sale
}: DashboardHeaderProps) => {
  return (
    <div className='mb-10 flex items-start gap-8'>
      <Avatar username={username} avatar_url={avatar_url} />

      <div>
        <DiscogsValues username={username} />
        <DashboardUserInfo
          buyer_rating={buyer_rating}
          buyer_num_ratings={buyer_num_ratings}
          num_collection={num_collection}
          num_wantlist={num_wantlist}
          num_for_sale={num_for_sale}
        />
      </div>
    </div>
  );
};
