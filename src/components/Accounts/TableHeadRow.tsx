import { activity, accountStatus, brokers } from '@utils/const';
import { getSelectOptions } from '@utils/getSelectOptions';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import useAccountQueryState from '@hooks/useAccountQueryState';
import SelectBox from '@components/UI/SelectBox';
import HeadColumn from '@components/UI/HeadColumn';

function TableHeadRow({ isSelectBox }: { isSelectBox: boolean }) {
  const { dispatchBrokerId, dispatchStatus, dispatchActivity } = useAccountQueryDispatch();
  const { brokerId, status, isActive } = useAccountQueryState();

  const brokerOptions = getSelectOptions(brokers, '증권사(전체)');
  const accountStatusOptions = getSelectOptions(accountStatus, '운용상태(전체)');
  const accountActivityOptions = getSelectOptions(activity, '계좌상태(전체)');

  return (
    <>
      <HeadColumn>
        {isSelectBox ? (
          <SelectBox options={brokerOptions} handleSelectChange={dispatchBrokerId} defaultValue={brokerId} />
        ) : (
          '증권사'
        )}
      </HeadColumn>
      <HeadColumn>계좌번호</HeadColumn>
      <HeadColumn>고객명</HeadColumn>
      <HeadColumn>
        {isSelectBox ? (
          <SelectBox options={accountStatusOptions} handleSelectChange={dispatchStatus} defaultValue={status} />
        ) : (
          '운용상태'
        )}
      </HeadColumn>
      <HeadColumn>계좌명</HeadColumn>
      <HeadColumn>평가금액</HeadColumn>
      <HeadColumn>입금금액</HeadColumn>
      <HeadColumn>
        {isSelectBox ? (
          <SelectBox options={accountActivityOptions} handleSelectChange={dispatchActivity} defaultValue={isActive} />
        ) : (
          '계좌상태'
        )}
      </HeadColumn>
      <HeadColumn>계좌개설일</HeadColumn>
    </>
  );
}

export default TableHeadRow;
