import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Spinner from '@/components/Spinner'
import { ChevronsUpDown } from "lucide-react"
import { useLazySymbolSearchQuery } from '@/core/store/services/companiesApi'
import { SymbolsSearchResult } from '@/core/types/companies'
import { useNavigate } from 'react-router-dom'

const SearchSymbolsInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const [searchSymbols, { data: suggestions = [], isFetching }] =
    useLazySymbolSearchQuery();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.length < 2) {
        return;
      }

      try {
        await searchSymbols(inputValue).unwrap();
        setIsOpen(true);
      } catch (error) {
        console.error(error);
        setIsOpen(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [inputValue, searchSymbols])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleItemSelect = (item: SymbolsSearchResult) => {
    setInputValue(item.name);
    setIsOpen(false);
    navigate(`/symbols/${item.symbol}`);
  }

  return (
    <div className="relative w-full max-w-xs">
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
        className="w-full"
      />
      {isFetching && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Spinner size="sm" />
        </div>
      )}
      {!isFetching && inputValue && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      )}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-popover text-popover-foreground shadow-md rounded-md border">
          <ScrollArea className="h-[200px]">
            {suggestions.map((item) => (
              <div
                key={item?.symbol}
                className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground"
                onClick={() => handleItemSelect(item)}
              >
                {item.name}
              </div>
            ))}
          </ScrollArea>
        </div>
      )}
    </div>
  )
}

export default SearchSymbolsInput