import { activity, staff } from '@utils/const';
import { getSelectOptions } from '@utils/getSelectOptions';
import SelectBox from '@components/UI/SelectBox';
import HeadColumn from '@components/UI/HeadColumn';
import useUserQueryDispatch from '@hooks/useUserQueryDispatch';
import useUserQueryState from '@hooks/useUserQueryState';

function TableHeadRow() {
  const { dispatchIsActive, dispatchIsStaff } = useUserQueryDispatch();
  const { isActive, isStaff } = useUserQueryState();

  const brokerOptions = getSelectOptions(staff, '임직원계좌(전체)');
  const userIsActiveOptions = getSelectOptions(activity, '활성화여부(전체)');

  return (
    <>
      <HeadColumn>고객명</HeadColumn>
      <HeadColumn>보유계좌수</HeadColumn>
      <HeadColumn>이메일</HeadColumn>
      <HeadColumn>성별</HeadColumn>
      <HeadColumn>생년월일</HeadColumn>
      <HeadColumn>휴대폰번호</HeadColumn>
      <HeadColumn>최근로그인</HeadColumn>
      <HeadColumn>혜택수신동의</HeadColumn>
      <HeadColumn>
        <SelectBox options={userIsActiveOptions} handleSelectChange={dispatchIsActive} defaultValue={isActive} />
      </HeadColumn>
      <HeadColumn>가입일</HeadColumn>
      <HeadColumn>
        <SelectBox options={brokerOptions} handleSelectChange={dispatchIsStaff} defaultValue={isStaff} />
      </HeadColumn>
    </>
  );
}

export default TableHeadRow;
