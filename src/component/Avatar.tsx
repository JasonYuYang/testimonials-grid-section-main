import React from 'react';

type AvatarProps = {
  avatar: string;
  name: string;
};

export const Avatar = ({ avatar, name }: AvatarProps) => {
  return (
    <div className='avatar'>
      <img className='avatar__img' src={avatar} alt={`${name}'s avatar'`} />
      <div className='avatar__content'>
        <span className='avatar__content--name'>{name}</span>
        <span className='avatar__content--verify'>Verified Graduate</span>
      </div>
    </div>
  );
};
