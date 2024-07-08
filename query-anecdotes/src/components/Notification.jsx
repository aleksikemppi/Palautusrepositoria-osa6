import React from 'react';
import { useNotification } from '../NotificationContext';

const Notification = () => {
  const [notification] = useNotification();

  if (!notification) {
    return null;
  }

  return (
    <div style={{ border: 'solid', padding: 10, borderWidth: 1 }}>
      {notification}
    </div>
  );
};

export default Notification;
