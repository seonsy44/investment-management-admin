import { accountActivity, accountStatus, brokers } from '@utils/const';
import { getSelectOptions } from '@utils/getSelectOptions';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import useAccountQueryState from '@hooks/useAccountQueryState';
import SelectBox from '@components/UI/SelectBox';
import HeadColumn from '@components/UI/HeadColumn';

function TableHeadRow() {
  const { dispatchBrokerId, dispatchStatus, dispatchActivity } = useAccountQueryDispatch();
  const { brokerId, status, isActive } = useAccountQueryState();

  const brokerOptions = getSelectOptions(brokers, '증권사(전체)');
  const accountStatusOptions = getSelectOptions(accountStatus, '운용상태(전체)');
  const accountActivityOptions = getSelectOptions(accountActivity, '계좌상태(전체)');

  return (
    <>
      <HeadColumn>
        <SelectBox options={brokerOptions} handleSelectChange={dispatchBrokerId} defaultValue={brokerId} />
      </HeadColumn>
      <HeadColumn>계좌번호</HeadColumn>
      <HeadColumn>고객명</HeadColumn>
      <HeadColumn>
        <SelectBox options={accountStatusOptions} handleSelectChange={dispatchStatus} defaultValue={status} />
      </HeadColumn>
      <HeadColumn>계좌명</HeadColumn>
      <HeadColumn>평가금액</HeadColumn>
      <HeadColumn>입금금액</HeadColumn>
      <HeadColumn>
        <SelectBox options={accountActivityOptions} handleSelectChange={dispatchActivity} defaultValue={isActive} />
      </HeadColumn>
      <HeadColumn>계좌개설일</HeadColumn>
    </>
  );
}

export default TableHeadRow;
