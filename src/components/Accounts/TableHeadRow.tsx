import styled from 'styled-components';

import SelectBox from '@components/UI/SelectBox';
import { flexBox } from '@styles/mixins';
import { accountActivity, accountStatus, brokers } from '@utils/const';
import { getSelectOptions } from '@utils/getSelectOptions';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import useAccountQueryState from '@hooks/useAccountQueryState';

function TableHeadRow() {
  const { dispatchBrokerId, dispatchStatus, dispatchActivity } = useAccountQueryDispatch();
  const { brokerId, status, isActive } = useAccountQueryState();

  const brokerOptions = getSelectOptions(brokers, '증권사(전체)');
  const accountStatusOptions = getSelectOptions(accountStatus, '운용상태(전체)');
  const accountActivityOptions = getSelectOptions(accountActivity, '계좌상태(전체)');

  return (
    <>
      <Item>
        <SelectBox options={brokerOptions} handleSelectChange={dispatchBrokerId} defaultValue={brokerId} />
      </Item>
      <Item>계좌번호</Item>
      <Item>고객명</Item>
      <Item>
        <SelectBox options={accountStatusOptions} handleSelectChange={dispatchStatus} defaultValue={status} />
      </Item>
      <Item>계좌명</Item>
      <Item>평가금액</Item>
      <Item>입금금액</Item>
      <Item>
        <SelectBox options={accountActivityOptions} handleSelectChange={dispatchActivity} defaultValue={isActive} />
      </Item>
      <Item>계좌개설일</Item>
    </>
  );
}

export default TableHeadRow;

const Item = styled.td`
  ${flexBox()};
  padding: 10px 0;
  background-color: ${({ theme }) => theme.GRAY_MEDIUM};
  font-size: 12px;
  font-weight: 700;
`;
