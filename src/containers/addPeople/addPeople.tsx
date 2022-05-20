import React from "react";

interface addPeopleProps {
  onClick: () => void;
  firstAtleta: boolean;
}

interface addPeopleState {}

class AddPeople extends React.Component<addPeopleProps, addPeopleState> {
  constructor(props: addPeopleProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="w-full flex items-center justify-center p-5 mt-20 px-100 ">
        {/* bg-teal-900 */}
        <div className=" flex justify-end w-full ">
          {/* bg-lime-900 */}
          <button
            onClick={() => this.props.onClick()}
            className="bg-white text-lg p-2 rounded-3xl "
          >
            Aggiunti atleta
          </button>
        </div>
      </div>
    );
  }
}

export default AddPeople;
