import Link from "next/link";

const ReceiptsTab = () => {
  return (
    <div className="border border-primary-1 border-opacity-20 lg:py-6 py-4 lg:px-6 px-6">
      <h5 className="lg:text-xl text-2md text-dark-2 font-semibold leading-[1.5]">
        My Receipts
      </h5>
      <div className="lg:overflow-x-auto overflow-x-scroll">
        <table className="dashboard-table mt-6 min-w-[500px]">
          <thead className="text-white text-opacity-90">
            <tr>
              <th>Receipt ID</th>
              <th>Package</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#RCP001</td>
              <td>Bali Adventure Package</td>
              <td>$1,299</td>
              <td>15 Dec 2023</td>
              <td>
                <span className="tag panding bg-green-700 text-white">
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href="/receipts"
                  aria-label="download receipt"
                  className="details-btn"
                >
                  Download
                </Link>
              </td>
            </tr>
            <tr>
              <td>#RCP002</td>
              <td>Tokyo City Tour</td>
              <td>$899</td>
              <td>08 Nov 2023</td>
              <td>
                <span className="tag panding bg-green-700 text-white">
                  Paid
                </span>
              </td>
              <td>
                <Link
                  href="/receipts"
                  aria-label="download receipt"
                  className="details-btn"
                >
                  Download
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceiptsTab;
