from django import template

register = template.Library()

@register.simple_tag
def range_tag(end):
    return range(1, int(end) + 1)

@register.filter
def get_range(value):
    return range(1, value + 1)