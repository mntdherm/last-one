import { format } from 'date-fns';
import { fi } from 'date-fns/locale';

interface Booking {
  id: string;
  created_at: string;
  customer: {
    name: string;
    email: string;
  };
  total_price: number;
  status: string;
}

interface RecentBookingsProps {
  bookings: Booking[];
}

export function RecentBookings({ bookings }: RecentBookingsProps) {
  if (bookings.length === 0) {
    return (
      <p className="text-gray-500 text-center py-4">Ei viimeaikaisia varauksia</p>
    );
  }

  return (
    <div className="flow-root">
      <ul role="list" className="-my-5 divide-y divide-gray-200">
        {bookings.map((booking) => (
          <li key={booking.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {booking.customer.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {format(new Date(booking.created_at), 'dd.MM.yyyy HH:mm', { locale: fi })}
                </p>
              </div>
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${
                    booking.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : booking.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {booking.status === 'confirmed' ? 'Vahvistettu' : 
                   booking.status === 'pending' ? 'Odottaa' : 'Peruttu'}
                </span>
              </div>
              <div className="flex-shrink-0 text-sm font-medium text-gray-900">
                {booking.total_price.toFixed(2)} €
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
