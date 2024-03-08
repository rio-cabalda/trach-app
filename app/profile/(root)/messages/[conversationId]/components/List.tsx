import React from 'react';

interface ListItem {
  title: string;
  description: string;
}

const CustomList: React.FC<{ items: ListItem[] }> = ({ items }) => (
  <ul className="list-none p-0 m-0">
    {items.map((item, index) => (
      <li key={index} className="flex items-center mb-2">
        <img
          src={`/path/to/your/custom-icon-${index + 1}.png`} // Replace with the path to your custom images
          alt={`Custom Icon ${index + 1}`}
          className="mr-2 w-4 h-4" // Adjust the size as needed
        />
        <div>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      </li>
    ))}
  </ul>
);

const ListProfile: React.FC<{ listItems: string[] }> = ({ listItems }) => (
  <div>
    <CustomList items={[
      { title: 'Email', description: listItems[0] },
      { title: 'Joined Date', description: listItems[1] }
    ]} />
  </div>
);

export default ListProfile;
