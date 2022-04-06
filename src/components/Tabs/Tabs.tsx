import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (event: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  return (
    <div className="container is-max-desktop">
      <div className="tabs is-centered is-large is-toggle is-fullwidth">
        <ul className="tabs__list">
          {tabs.map(item => (
            <li key={item.id}>
              <button
                type="button"
                className={classNames(selectedTabId === item.id
                  ? 'button my-active'
                  : 'button is-success')}
                onClick={() => {
                  if (selectedTabId !== item.id) {
                    onTabSelected(item);
                  }
                }}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="is-size-4">
        {selectedTab.content}
      </p>
    </div>
  );
};