import { useState } from 'react';
import parseIntoTokens from '../utils/parseIntoTokens';
import { removeExtraWhitespace } from '../utils/text';

const useComposition = () => {
  const [content, setContent] = useState([]);
  const [proposal, setProposal] = useState('');

  const addProposalAndSuggestion = (suggestion) => {
    const formattedProposal = removeExtraWhitespace(proposal);
    const proposalItems = formattedProposal ? formattedProposal.split(' ') : [];
    const suggestionItems = suggestion.split(' ');
    const newContent = content
      .concat(proposalItems)
      .concat(suggestionItems);
    setContent(newContent);
    setProposal('');
  };

  const getContentTokens = () => {
    return parseIntoTokens(
      content.reduce((accum, word) => {
        return accum + ' ' + word;
      }, "")
    );
  };

  const getProposalTokens = () => {
    return parseIntoTokens(proposal);
  };

  const getAllTokens = () => {
    return getContentTokens().concat(getProposalTokens());
  };

  const clearContent = () => {
    setContent([]);
  };

  const updateContentAtIndex = (index, word) => {
    const newContent = [...content];
    newContent[index] = word;
    setContent(newContent);
  };

  return {
    content,
    proposal,
    setProposal,
    setContent,
    clearContent,
    updateContentAtIndex,
    addProposalAndSuggestion,
    getContentTokens,
    getProposalTokens,
    getAllTokens,
  };
};

export default useComposition;