import * as React from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import CheckboxCreator from './components/CheckboxCreator';
import Radio from './components/Radio';
import Switch from './components/Switch';
import Select from './components/Select';
import { Option } from './components/Select';

function App(): any {
  const radioChange = () => console.log('> chagne');
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
        <Button variant="emboss">emboss</Button>
        <Button variant="dent">dent</Button>
      </div>
      <div className="p-5 flex space-x-4">
        <Input />
      </div>
      <div className="p-5 flex space-x-4">
        <Select name="select" value={'a'}>
          <Option value="a">option 1</Option>
          <Option value="b">option 2</Option>
          <Option value="c">option 3</Option>
        </Select>
      </div>
      <div className="p-5 flex space-x-4">
        <Checkbox label="emboss" variant="emboss" />
        <Checkbox label="emboss-outline " variant="emboss-outline" />
        <Checkbox label="emboss-fill" variant="emboss-fill" />
      </div>
      <div className="p-5 flex space-x-4">
        <Checkbox label="dent" variant="dent" />
        <Checkbox label="dent-outline " variant="dent-outline" />
      </div>
      <div className="p-5 flex space-x-4">
        <CheckboxCreator
          name="state_both"
          values={['a', 'c']}
          model={[
            { label: 'a', value: 'a' },
            { label: 'b', value: 'b' },
            { label: 'c', value: 'c' },
          ]}
        />
      </div>

      <div className="p-5 flex space-x-4">
        <Radio
          name="emboss-radio"
          label="emboss-a"
          value="a"
          onChange={radioChange}
        />
        <Radio
          name="emboss-radio"
          label="emboss-b"
          value="b"
          onChange={radioChange}
        />
        <Radio
          name="emboss-radio"
          label="emboss-c"
          value="c"
          onChange={radioChange}
        />
      </div>
      <div className="p-5 flex space-x-4">
        <Radio name="dent-radio" label="dent-a" value="a" variant="dent" />
        <Radio name="dent-radio" label="dent-b" value="b" variant="dent" />
        <Radio
          name="dent-radio"
          label="dent-c"
          value="c"
          variant="dent"
          onChange={() => false}
        />
      </div>
      <div className="p-5 flex space-x-4">
        <Switch name="switch-dent" variant="dent" />
        <Switch name="switch-emboss" variant="emboss" />
      </div>
      <div>
        <div className="test-box">
          <div className="inner-box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
