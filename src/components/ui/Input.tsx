import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  error?: string;
  textarea?: boolean;
  selectOptions?: { label: string; value: string }[];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, textarea, selectOptions, className = '', ...props }, ref) => {
    const baseInputStyles =
      'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white text-navy-900';

    return (
      <div className="mb-5">
        <label className="block text-sm font-semibold text-navy-900 mb-2">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {selectOptions ? (
          <select
            className={`${baseInputStyles} ${error ? 'border-red-500' : ''} ${className}`}
            {...(props as InputHTMLAttributes<HTMLSelectElement>)}
          >
            <option value="">Select...</option>
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : textarea ? (
          <textarea
            className={`${baseInputStyles} min-h-[120px] resize-y ${error ? 'border-red-500' : ''} ${className}`}
            {...(props as InputHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref}
            className={`${baseInputStyles} ${error ? 'border-red-500' : ''} ${className}`}
            {...props}
          />
        )}

        {error && (
          <p className="text-red-500 text-xs mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
