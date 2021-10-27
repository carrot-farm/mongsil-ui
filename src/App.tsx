import * as React from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import CheckboxCreator from './components/CheckboxCreator';
import Radio from './components/Radio';
import RadioCreator from './components/RadioCreator/RadioCreator';
import Switch from './components/Switch';
import Select, { Option } from './components/Select';
import SelectCreator from './components/SelectCreator';
import FormItem from './components/FormItem';
import Form from './components/Form';

import useForm from './hooks/useForm';

function App(): any {
  const { form, setValue } = useForm();
  // console.log('> app: ', setValue);

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
        <Button variant="emboss" disabled>
          emboss
        </Button>
        <Button variant="dent" disabled>
          dent
        </Button>
      </div>
      <div className="p-5 flex space-x-4">
        <Input value="test" disabled />
      </div>
      <div className="p-5 flex space-x-4">
        <Select name="select" value={'a'} disabled>
          <Option value="a">option 1</Option>
          <Option value="b">option 2</Option>
          <Option value="c">option 3</Option>
        </Select>
      </div>
      <div className="p-5 flex space-x-4">
        <SelectCreator
          name="select_creator"
          // value="b"
          defaultValue="b"
          disabled
          model={[
            { label: 'a', value: 'a' },
            { label: 'b', value: 'b' },
            { label: 'c', value: 'c' },
          ]}
          onChange={(v, n) => console.log('> ', v, n)}
        />
      </div>

      <div className="p-5 flex space-x-4">
        <Checkbox label="emboss" variant="emboss" disabled />
        <Checkbox
          label="emboss-outline "
          variant="emboss-outline"
          disabled
          checked
        />
        <Checkbox label="emboss-fill" variant="emboss-fill" disabled />
      </div>
      {/* <div className="p-5 flex space-x-4">
        <Checkbox label="dent" variant="dent" />
        <Checkbox label="dent-outline " variant="dent-outline" />
      </div> */}
      <div className="p-5 flex space-x-4">
        <CheckboxCreator
          name="state_both"
          value={['a', 'c']}
          disabled
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
          checked
          disabled
          onChange={(v, n) => console.log(v, n)}
        />
        <Radio
          name="emboss-radio"
          label="emboss-b"
          value="b"
          disabled
          onChange={(v, n) => console.log(v, n)}
        />
        <Radio
          name="emboss-radio"
          label="emboss-c"
          value="c"
          disabled
          onChange={(v, n) => console.log(v, n)}
        />
      </div>
      <div className="p-5 flex space-x-4">
        <Radio
          name="dent-radio"
          label="dent-a"
          value="a"
          variant="dent"
          disabled
        />
        <Radio
          name="dent-radio"
          label="dent-b"
          value="b"
          variant="dent"
          disabled
        />
        <Radio
          name="dent-radio"
          label="dent-c"
          value="c"
          variant="dent"
          disabled
          checked
          onChange={() => false}
        />
      </div>
      <div className="p-5 flex space-x-4">
        <RadioCreator
          name="radio-creator-1"
          // value="b"
          defaultValue="b"
          disabled
          model={[
            { label: 'radio-a', value: 'a' },
            { label: 'radio-b', value: 'b' },
            { label: 'radio-c', value: 'c' },
          ]}
          onChange={(value, name) => console.log(name, value)}
        />
      </div>

      <div className="p-5 flex space-x-4">
        <Switch name="switch-dent" variant="dent" disabled />
        <Switch name="switch-emboss" variant="emboss" disabled />
        <Switch name="switch-dent" variant="dent" disabled checked />
        <Switch name="switch-emboss" variant="emboss" disabled checked />
      </div>

      {/* <div className="p-5 flex space-x-4">
        <FormItem
          label="label"
          helper="helperText"
          name="test-name"
          direction="y"
        >
          <Input />
        </FormItem>
        <FormItem
          label="label"
          helper="helperText"
          direction="x"
          name="test-name-2"
        >
          <Input />
        </FormItem>
      </div> */}

      <h5 className="pb-2 border-b border-gray-500 text-xl">Form & FormItem</h5>
      <div className="p-5 flex space-x-4">
        <Form form={form} onSubmit={(values) => console.log(values)}>
          <FormItem
            label="label"
            name="input-1"
            value="test"
            disabled
            rules={[{ rule: ['required'], message: '값을 입력하십시요' }]}
          >
            <Input />
          </FormItem>
          {/* <FormItem
            label="select"
            name="test"
            value="b"
            // rules={[{ rule: ['required'], message: '에러' }]}
          >
            <RadioCreator
              model={[
                { label: 'radio-a', value: 'a' },
                { label: 'radio-b', value: 'b' },
                { label: 'radio-c', value: 'c' },
              ]}
            />
          </FormItem> */}
          <FormItem
            label="label-2"
            name="input-2"
            rules={[{ rule: ['required'], message: '에러' }]}
            // rules={[{ rule: ['length', 3, 5], message: '3글자 이상 5자 이하' }]}
          >
            <Input />
          </FormItem>
          {/*
          <FormItem label="label-2" name="input-3">
            <Input />
          </FormItem>
          <FormItem label="label-2" name="input-4">
            <Input />
          </FormItem> */}

          {/* <Button type="submit" onClick={() => setValue('input-1', 'test')}> */}
          <Button type="submit">submit</Button>

          {/* <FormItem
            label="select-1"
            name="select"
            value="b"
            // onChange={() => false}
            onChange={(value, name) => console.log('> select: ', name, value)}
          >
            <Select>
              <Option value="a">option 1</Option>
              <Option value="b">option 2</Option>
              <Option value="c">option 3</Option>
            </Select>
          </FormItem> */}

          {/* <FormItem
            label="checkbox"
            name="chekcbox-1"
            // value={true}
            // onChange={() => false}
            onChange={(value, name) => console.log('> checkbox :', name, value)}
          >
            <Checkbox label="a" />
          </FormItem> */}

          {/* <FormItem
            label="checkbox-creator"
            name="checkbox-creator-1"
            value={['a', 'c']}
            onChange={() => false}
            // onChange={(value, name) =>
            //   console.log('> checkbox-creator :', name, value)
            // }
          >
            <CheckboxCreator
              model={[
                { label: 'a', value: 'a' },
                { label: 'b', value: 'b' },
                { label: 'c', value: 'c' },
              ]}
            />
          </FormItem> */}

          {/* <FormItem
            label="radio"
            name="radio"
            value="a"
            // stateBind="stateOnly"
            onChange={(v, n) => console.log(v, n)}
            // onChange={() => false}
          >
            <RadioCreator
              model={[
                { label: 'a', value: 'a' },
                { label: 'b', value: 'b' },
                { label: 'c', value: 'c' },
              ]}
            />
          </FormItem>
            */}

          {/* <FormItem
            label="switch"
            name="switch"
            value={true}
            // stateBind="stateOnly"
            // onChange={() => false}
            // onChange={(value, name) => console.log('> switch: ', value, name)}
          >
            <Switch variant="dent" />
          </FormItem> */}
        </Form>
      </div>
      <div className="h-80"></div>
    </div>
  );
}

export default App;
