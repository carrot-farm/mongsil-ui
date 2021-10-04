import * as React from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Switch from './components/Switch';
import Select from './components/Select';
import { Option } from './components/Select';

function App(): any {
  return (
    <div className="app bg-base">
      <div className="p-5 flex">
        <div className="w-20 h-20 bg-base emboss-100 "></div>
        <div className="w-20 h-20 bg-base emboss-200 ml-10"></div>
        <div className="w-20 h-20 bg-base emboss-300 ml-10"></div>
        <div className="w-20 h-20 bg-base emboss-400 ml-10"></div>
        <div className="w-20 h-20 bg-base emboss-500 ml-10"></div>
      </div>
      <div className="p-5 flex ">
        <div className="w-20 h-20 bg-base dent-100 "></div>
        <div className="w-20 h-20 bg-base dent-200 ml-10"></div>
        <div className="w-20 h-20 bg-base dent-300 ml-10"></div>
        <div className="w-20 h-20 bg-base dent-400 ml-10"></div>
        <div className="w-20 h-20 bg-base dent-500 ml-10"></div>
      </div>
      <div className="p-5 flex space-x-4">
        <Button className="text-gray-500">small</Button>
        <Button>medium</Button>
        <Button>large</Button>
      </div>
      <div className="p-5 flex space-x-4">
        <Input />
      </div>
      <div className="p-5 flex space-x-4">
        <Checkbox variant="fill" />
        <Checkbox variant="border" />
        <Checkbox variant="none" />
        <Checkbox label="label" />
      </div>
      <div className="p-5 flex space-x-4">
        <Radio name="name" label="label-a" value="a" />
        <Radio name="name" label="label-b" value="b" />
        <Radio name="name" label="label-c" value="c" />
      </div>
      <div className="p-5 flex space-x-4">
        <Switch name="switch-dent" variant="dent" />
        <Switch name="switch-emboss" variant="emboss" />
      </div>
      <div className="p-5 flex space-x-4">
        <Select name="select" value={'c'}>
          <Option value="a">a</Option>
          <Option value="b">b</Option>
          <Option value="c">c</Option>
        </Select>
      </div>
    </div>
  );
}

export default App;
