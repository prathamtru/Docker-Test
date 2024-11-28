import Tabs from '../components/Tab/Tabs';
import Tab from '../components/Tab/Tab';
import TabPanel from '../components/Tab/TabPanel';

const HomePage: React.FC = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div className="ui-font-poppinsRegular ui-text-base">This is the content of Tab 1 <a className="subtitle_btnlink" href="https://www.beekind.ca/" aria-label="Click here to open Bee Kind Honey" target="_blank">Bee Kind Honey</a> Lorem ipsum is a content <a className="subtitle_btnlink" href="https://www.beekind.ca/" aria-label="Click here to open Bee Kind Honey" target="_blank">Bee Kind Honey</a></div>,
    },
    {
      label: 'Tab 2',
      content: <div className="ui-font-poppinsRegular ui-text-base">This is the content of Tab 2 <a className="subtitle_btnlink" href="https://www.beekind.ca/" aria-label="Click here to open Bee Kind Honey" target="_blank">Bee Kind Honey</a> Lorem ipsum is a content <a className="subtitle_btnlink" href="https://www.beekind.ca/" aria-label="Click here to open Bee Kind Honey" target="_blank">Bee Kind Honey</a></div>,
    },
    {
      label: 'Tab 3',
      content: <div className="ui-font-poppinsRegular ui-text-base">This is the content of Tab 3 <a className="subtitle_btnlink" href="https://www.beekind.ca/" aria-label="Click here to open Bee Kind Honey" target="_blank">Bee Kind Honey</a> Lorem ipsum is a content <a className="subtitle_btnlink" href="https://www.beekind.ca/" aria-label="Click here to open Bee Kind Honey" target="_blank">Bee Kind Honey</a></div>,
    },
  ];

  return (
    <div className='ui-p-[100px]'>
    <Tabs>
      <div className="ui-h-full ui-grid ui-grid-cols-12">
        {tabs.map((tab, index) => (
          <>
          <Tab index={index} label={tab.label} className="ui-col-start-1 ui-col-end-4" />
          <TabPanel index={index} className='ui-col-start-4 ui-col-end-12 ui-row-start-1 ui-row-end-1'>
            {tab.content}            
          </TabPanel>
          </>
        ))}
      </div>
    </Tabs>
  </div>
  );
};

export default HomePage;
