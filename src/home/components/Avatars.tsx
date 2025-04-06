import { Avatar} from 'antd';
const Avatars = () => {

  const avat = [
    {
      "id": 1,
      "url": "https://story.uzmovi.tv/2025-03-23/80x80_1742727000_6480d647b3de38654075.jpg"
    },
    {
      "id": 2,
      "url": "https://story.uzmovi.tv/2024-09-17/80x80_1726578439_b2b377b3ca7842b98fc9.jpg"
    },
    {
      "id": 3,
      "url": "https://story.uzmovi.tv/2024-09-15/80x80_1726397971_d876ac6010b47bfc483f.jpg"
    },
    {
      "id": 4,
      "url": "https://story.uzmovi.tv/2025-03-23/80x80_1742726972_aeebd61b45a5e3031be2.jpg"
    },
    {
      "id": 5,
      "url": "https://story.uzmovi.tv/2025-01-19/80x80_1737277601_51641a156b12b76ae843.jpg"
    },
    {
      "id": 6,
      "url": "https://story.uzmovi.tv/2025-02-26/80x80_1740521135_3266ad3e46220b31eb36.jpg"
    },
    {
      "id": 7,
      "url": "https://story.uzmovi.tv/2024-09-22/80x80_1726951582_2304928ecc9319e1bdf0.jpg"
    },
    {
      "id": 8,
      "url": "https://story.uzmovi.tv/2024-12-06/80x80_1733509837_3d9f01017a7c29feb6a7.jpg"
    },
    {
      "id": 9,
      "url": "https://story.uzmovi.tv/2024-10-20/80x80_1729438405_465aa814488827681052.jpg"
    },
    {
      "id": 10,
      "url": "https://story.uzmovi.tv/2024-12-07/80x80_1733588147_f7c3e72aa21793e7d229.jpg"
    },
    {
      "id": 11,
      "url": "https://story.uzmovi.tv/2024-10-20/80x80_1729373362_9ca6791e2c918de004b4.jpg"
    },
    {
      "id": 12,
      "url": "https://story.uzmovi.tv/2025-02-13/80x80_1739443638_3e0c785c31a6fa62e564.jpg"
    },
    {
      "id": 13,
      "url": "https://story.uzmovi.tv/2024-10-16/80x80_1729076558_878baabd58363df3e696.jpg"
    },
    {
      "id": 14,
      "url": "https://story.uzmovi.tv/2024-09-27/80x80_1727380389_a0b4ff498cb008848aa5.jpg"
    },
    {
      "id": 15,
      "url": "https://story.uzmovi.tv/2024-09-24/80x80_1727183731_9c5507733634cbd386de.jpg"
    },
    {
      "id": 16,
      "url": "https://story.uzmovi.tv/2024-09-22/80x80_1726947537_f07cf51f8d74b4e5f14a.jpg"
    },
    {
      "id": 17,
      "url": "https://story.uzmovi.tv/2024-10-22/80x80_1729540575_37ce5fba746faa2a254e.jpg"
    },
    {
      "id": 18,
      "url": "https://story.uzmovi.tv/2024-12-02/80x80_1733087488_56f2843b363e8038aabb.jpg"
    },
    {
      "id": 19,
      "url": "https://story.uzmovi.tv/2024-09-17/80x80_1726578479_e7a0bef94746c341fc69.jpg"
    },
    {
      "id": 20,
      "url": "https://story.uzmovi.tv/2024-10-17/80x80_1729110665_5e67ed8b6049b6dc33a4.jpg"
    },
    {
      "id": 21,
      "url": "https://story.uzmovi.tv/2024-10-15/80x80_1728949552_0db5832b296e77e9e556.jpg"
    },
    {
      "id": 22,
      "url": "https://story.uzmovi.tv/2024-12-07/80x80_1733587698_2ba71293c3518a4d5ce9.jpg"
    },
    {
      "id": 23,
      "url": "https://story.uzmovi.tv/2024-09-17/80x80_1726577298_d994ab5d19801cc9ae0b.jpg"
    },
    {
      "id": 24,
      "url": "https://story.uzmovi.tv/2024-09-18/80x80_1726605468_a7b8184972a7b8fd1cf8.jpg"
    },
    {
      "id": 25,
      "url": "https://story.uzmovi.tv/2025-03-05/80x80_1741196383_e8c7a5bdc23fbe4480ff.jpeg"
    },
    {
      "id": 26,
      "url": "https://story.uzmovi.tv/2024-09-26/80x80_1727336623_b550466b0ba826d14582.jpg"
    },
    {
      "id": 27,
      "url": "https://story.uzmovi.tv/2025-02-13/80x80_1739443696_9b055eba76f5f0a8f9b1.jpg"
    },
    {
      "id": 28,
      "url": "https://story.uzmovi.tv/2024-09-23/80x80_1727038866_f569cbe9ea162e287417.jpg"
    },
    {
      "id": 29,
      "url": "https://story.uzmovi.tv/2025-02-13/80x80_1739443725_786125f68c6473d5f40a.jpg"
    },
    {
      "id": 30,
      "url": "https://story.uzmovi.tv/2024-12-07/80x80_1733587946_57f1e9bc93c72b28835d.jpg"
    },
    {
      "id": 31,
      "url": "https://story.uzmovi.tv/2024-12-02/80x80_1733085138_d536c674e28996d6faf4.jpg"
    },
    {
      "id": 32,
      "url": "https://story.uzmovi.tv/2025-01-19/80x80_1737277510_e81e5235412c8aa97c55.jpg"
    },
    {
      "id": 33,
      "url": "https://story.uzmovi.tv/2024-12-02/80x80_1733085037_c2a9be36da8985fdf21d.jpg"
    },
    {
      "id": 34,
      "url": "https://story.uzmovi.tv/2024-12-02/80x80_1733085015_10375cdcfebed5e76273.jpg"
    },
    {
      "id": 35,
      "url": "https://story.uzmovi.tv/2025-01-19/80x80_1737277835_f800a3b3b26f7265aa0c.jpg"
    },
    {
      "id": 36,
      "url": "https://story.uzmovi.tv/2025-01-19/80x80_1737277801_860034fb6446c39d9e3d.jpg"
    },
    {
      "id": 37,
      "url": "https://story.uzmovi.tv/2024-09-15/80x80_1726394233_80b665b9d74e0c94bafc.jpg"
    },
    {
      "id": 38,
      "url": "https://story.uzmovi.tv/2024-12-07/80x80_1733587551_3e42088c3d993e086cb2.jpg"
    },
    {
      "id": 39,
      "url": "https://story.uzmovi.tv/2025-02-13/80x80_1739444231_693af6976ad00d576e9d.jpg"
    },
    {
      "id": 40,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    //  olgan url lar 40 id ning urli
    {
      "id": 41,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 42,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 43,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 44,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 45,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 46,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 47,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 48,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 49,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 50,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 51,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 52,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 53,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 54,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 55,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 56,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 57,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 58,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 59,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 60,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 61,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 62,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 63,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 64,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 65,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 66,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 67,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 68,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 69,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 70,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 71,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 72,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 73,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 74,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 75,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 76,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 77,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 78,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 79,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 80,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 81,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 82,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 83,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 84,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 85,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 86,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 87,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 88,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 89,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 90,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 91,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 92,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 93,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 94,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 95,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 96,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 97,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 98,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 99,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
    {
      "id": 100,
      "url": "https://story.uzmovi.tv/2024-09-29/80x80_1727632335_6873d4f59e5143e22c98.jpg"
    },
  ]


  return (
    <div className="avatar py-1.5">
      <div className="container-main overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap gap-2 p-1 w-max">
          {avat.map((item) => (
            <div
              key={item.id}
              className="min-w-[60px] border border-[#a5bbdc] rounded-full cursor-pointer transition transform hover:scale-105"
            >
              <Avatar size={60} src={item.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Avatars
