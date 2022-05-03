import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'overlay/Dialog',
  component: Dialog,
  argTypes: {
    title: {
      type: { name: 'string' },
    },
    body: {
      type: { name: 'string' },
    },
    okText: {
      type: { name: 'string' },
    },
    cancelText: {
      type: { name: 'string' },
    },
    scrollType: {
      control: {
        type: 'select',
      },
      options: ['body', 'modal', 'modal-in'],
      defaultValue: 'body',
    },
    argTypes: {
      title: {
        type: { name: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

const someStrings = `모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다. 탄핵결정은 공직으로부터 파면함에 그친다. 그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는 아니한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다.
법률안에 이의가 있을 때에는 대통령은 제1항의 기간내에 이의서를 붙여 국회로 환부하고, 그 재의를 요구할 수 있다. 국회의 폐회중에도 또한 같다. 모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는 부결된 것으로 본다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다.
국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다. 국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다. 대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다. 이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 모든 국민은 양심의 자유를 가진다. 훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도 이에 따르지 아니한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다.
국무위원은 국무총리의 제청으로 대통령이 임명한다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다. 법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다. 행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이 임명한다. 모든 국민은 학문과 예술의 자유를 가진다. 헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여 국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을 얻어야 한다.
대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다. 계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다.
대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의 임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여 집회된다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다.`;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  body: 'body',
  visible: true,
};

export const Visible: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="w-full mt-48 flex justify-center items-center">
      <button onClick={() => setVisible((a) => !a)}>toggle </button>
      <Dialog
        title="title"
        body="body"
        visible={visible}
        onCancel={() => setVisible(false)}
        onClose={() => setVisible(false)}
        onBackdropClick={() => setVisible(false)}
      />
    </div>
  );
};

export const Title = Template.bind({});
Title.args = {
  title: 'title',
  visible: true,
};

export const BackgroundStyle: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button onClick={() => setVisible((a) => !a)}>toggle </button>
      <p>{someStrings}</p>

      <Dialog
        title="title"
        body="body"
        visible={visible}
        onCancel={() => setVisible(false)}
        onClose={() => setVisible(false)}
        onBackdropClick={() => setVisible(false)}
      />
    </div>
  );
};

export const BodyScroll = Template.bind({});
BodyScroll.args = {
  body: someStrings,
  visible: true,
};

export const ModalScroll = Template.bind({});
ModalScroll.args = {
  scrollType: 'modal',
  body: someStrings,
  visible: true,
};

// export const ModalInScroll = Template.bind({});
// ModalInScroll.args = {
//   scrollType: 'modal-in',
//   body: someStrings,
//   visible: true,
// };

// export const Confirm: React.FC = () => {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           Dialog.confirm({
//             title: 'title',
//             body: 'body',
//             onOk: () => {
//               console.log('ok');
//             },
//           });
//         }}
//       >
//         confirm
//       </button>
//     </div>
//   );
// };

// export const Alert: React.FC = () => {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           Dialog.alert({
//             body: '경고',
//           });
//         }}
//       >
//         alert
//       </button>
//     </div>
//   );
// };
