export const Avatar = ({
  avatar_url,
  username
}: {
  avatar_url: string;
  username: string;
}) => {
  if (!avatar_url) return null;

  return (
    <figure className='border-6 border-solid border-black bg-white p-8 drop-shadow-xl'>
      <img
        src={avatar_url}
        alt={`Avatar for ${username}`}
        className={'max-w-48 drop-shadow-xl sepia'}
      />
    </figure>
  );
};
